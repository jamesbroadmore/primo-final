"""Backend tests for Primo Pools API"""
import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')


class TestHealth:
    """Health check endpoint"""

    def test_health(self):
        res = requests.get(f"{BASE_URL}/api/health")
        assert res.status_code == 200
        data = res.json()
        assert data.get("status") == "ok"
        print(f"Health check passed: {data}")


class TestContact:
    """Contact form submission"""

    def test_contact_valid(self):
        payload = {
            "firstName": "TEST_James",
            "lastName": "Williams",
            "email": "test@example.com",
            "phone": "0400123456",
            "suburb": "Cottesloe",
            "projectType": "new-pool-tiling",
            "tileInterest": "glass-mosaic",
            "budget": "10k-25k",
            "message": "Looking for luxury pool tiles for my new pool."
        }
        res = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert res.status_code == 200
        data = res.json()
        assert data.get("success") is True
        assert "id" in data
        print(f"Contact submission passed: {data}")

    def test_contact_missing_required_field(self):
        payload = {
            "firstName": "James",
            # missing lastName, email, phone, suburb, projectType, message
        }
        res = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert res.status_code == 422  # Pydantic validation error
        print(f"Missing field validation: {res.status_code}")


class TestChat:
    """AI Chat endpoint"""

    def test_chat_valid_message(self):
        payload = {
            "messages": [{"role": "user", "content": "What tiles do you recommend for a luxury pool?"}],
            "sessionId": "test-session-001"
        }
        res = requests.post(f"{BASE_URL}/api/chat", json=payload, timeout=30)
        assert res.status_code == 200
        data = res.json()
        assert data.get("success") is True
        assert "response" in data
        assert len(data["response"]) > 0
        print(f"Chat response: {data['response'][:100]}")

    def test_chat_no_messages(self):
        payload = {"messages": []}
        res = requests.post(f"{BASE_URL}/api/chat", json=payload, timeout=10)
        assert res.status_code == 400
        print(f"Empty messages validation: {res.status_code}")
