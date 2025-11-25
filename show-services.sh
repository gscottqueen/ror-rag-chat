#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}  ROR RAG Chat - Service Status & Access URLs${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Function to check if a service is running
check_service() {
    local service_name=$1
    if docker compose ps --services --filter "status=running" 2>/dev/null | grep -q "^${service_name}$"; then
        echo "running"
    else
        echo "stopped"
    fi
}

# Function to check HTTP endpoint
check_http() {
    local url=$1
    if curl -s -o /dev/null -w "%{http_code}" --connect-timeout 2 "$url" | grep -q "^[23]"; then
        echo "healthy"
    else
        echo "unhealthy"
    fi
}

# Function to get service description
get_service_description() {
    local service=$1
    case "$service" in
        frontend) echo "Next.js Main App" ;;
        auth-frontend) echo "Authentication UI" ;;
        auth-api) echo "RESTful API" ;;
        auth-db) echo "PostgreSQL Database" ;;
        auth-docs) echo "API Documentation" ;;
        adminer) echo "DB Admin Interface" ;;
        *) echo "Service" ;;
    esac
}

# Function to format service name
format_service_name() {
    local service=$1
    # Convert service name to title case and replace hyphens
    echo "$service" | sed 's/-/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2))}1'
}

# Function to display service status
show_service() {
    local service=$1
    local port=$2
    local protocol=${3:-http}
    
    local name=$(format_service_name "$service")
    
    # Build URL based on protocol and port
    if [[ "$protocol" == "postgresql" ]]; then
        local url="postgresql://localhost:${port}"
    else
        local url="http://localhost:${port}"
    fi
    
    status=$(check_service "$service")
    
    if [[ "$status" == "running" ]]; then
        # Check health for HTTP services
        if [[ "$protocol" == "http" ]]; then
            health=$(check_http "$url")
            if [[ "$health" == "healthy" ]]; then
                status_icon="${GREEN}●${NC}"
                status_text="${GREEN}running${NC}"
            else
                status_icon="${YELLOW}◐${NC}"
                status_text="${YELLOW}starting${NC}"
            fi
        else
            status_icon="${GREEN}●${NC}"
            status_text="${GREEN}running${NC}"
        fi
    else
        status_icon="${RED}○${NC}"
        status_text="${RED}stopped${NC}"
    fi
    
    printf "  %b %-18s %b\n" "$status_icon" "$name" "$status_text"
    printf "    ${BLUE}→${NC} %s\n\n" "$url"
}

# Get all services and their ports from docker-compose config
if command -v docker &> /dev/null && command -v jq &> /dev/null; then
    # Get docker-compose config as JSON and parse it
    config_json=$(docker compose config --format json 2>/dev/null)
    
    if [[ -n "$config_json" ]]; then
        # Get list of services
        services=$(echo "$config_json" | jq -r '.services | keys[]' 2>/dev/null | sort)
        
        if [[ -n "$services" ]]; then
            while IFS= read -r service; do
                # Extract the published port for this service
                port=$(echo "$config_json" | jq -r ".services.\"$service\".ports[0].published // empty" 2>/dev/null)
                
                if [[ -n "$port" ]]; then
                    # Determine protocol based on service image or name
                    if [[ "$service" == *"db"* ]] || [[ "$service" == *"postgres"* ]]; then
                        show_service "$service" "$port" "postgresql"
                    else
                        show_service "$service" "$port" "http"
                    fi
                fi
            done <<< "$services"
        else
            echo -e "  ${RED}Error: No services found in docker-compose.yml${NC}"
            echo ""
        fi
    else
        echo -e "  ${RED}Error: Could not read docker-compose.yml${NC}"
        echo ""
    fi
elif ! command -v docker &> /dev/null; then
    echo -e "  ${RED}Error: Docker is not installed${NC}"
    echo -e "  Install Docker: ${BLUE}https://docs.docker.com/get-docker/${NC}"
    echo ""
elif ! command -v jq &> /dev/null; then
    echo -e "  ${RED}Error: jq is required to parse docker-compose.yml${NC}"
    echo -e "  Install with: ${GREEN}brew install jq${NC}"
    echo ""
fi

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "  ${YELLOW}Tip:${NC} Run ${GREEN}docker compose logs -f <service>${NC} to view logs"
