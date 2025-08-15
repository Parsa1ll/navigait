// API service for communicating with NavigAIt backend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8081';

// Types for API responses
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  preferences: UserPreferences;
}

export interface UserPreferences {
  preferredTransport: 'car' | 'walking' | 'transit' | 'bicycle';
  avoidHighways: boolean;
  avoidTolls: boolean;
  optimizeFor: 'time' | 'distance' | 'traffic' | 'eco';
}

export interface RouteRequest {
  origin: {
    lat: number;
    lng: number;
    address?: string;
  };
  destination: {
    lat: number;
    lng: number;
    address?: string;
  };
  preferences?: Partial<UserPreferences>;
  departureTime?: string;
}

export interface RouteResponse {
  routeId: string;
  distance: number;
  duration: number;
  trafficLevel: 'low' | 'medium' | 'high';
  steps: RouteStep[];
  alternatives: RouteAlternative[];
}

export interface RouteStep {
  instruction: string;
  distance: number;
  duration: number;
  transportMode: string;
  coordinates: Array<{ lat: number; lng: number }>;
}

export interface RouteAlternative {
  routeId: string;
  distance: number;
  duration: number;
  trafficLevel: 'low' | 'medium' | 'high';
  summary: string;
}

export interface Trip {
  id: string;
  userId: string;
  route: RouteResponse;
  startTime: string;
  endTime?: string;
  status: 'planned' | 'in-progress' | 'completed' | 'cancelled';
}

// API service class
class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  // Generic request method
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      console.error('API request failed:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  // Health check
  async healthCheck(): Promise<ApiResponse> {
    return this.request('/health');
  }

  // Authentication
  async register(email: string, password: string, name: string): Promise<ApiResponse<User>> {
    return this.request('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
    });
  }

  async login(email: string, password: string): Promise<ApiResponse<{ token: string; user: User }>> {
    return this.request('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  // Route optimization
  async optimizeRoute(routeRequest: RouteRequest): Promise<ApiResponse<RouteResponse>> {
    return this.request('/api/routes/optimize', {
      method: 'POST',
      body: JSON.stringify(routeRequest),
    });
  }

  async getTrafficData(lat: number, lng: number): Promise<ApiResponse<any>> {
    return this.request(`/api/routes/traffic?lat=${lat}&lng=${lng}`);
  }

  // Trip management
  async createTrip(tripData: Partial<Trip>): Promise<ApiResponse<Trip>> {
    return this.request('/api/trips/', {
      method: 'POST',
      body: JSON.stringify(tripData),
    });
  }

  async getTripHistory(): Promise<ApiResponse<Trip[]>> {
    return this.request('/api/trips/history');
  }

  // User preferences
  async getUserPreferences(): Promise<ApiResponse<UserPreferences>> {
    return this.request('/api/users/preferences');
  }

  async updateUserPreferences(preferences: Partial<UserPreferences>): Promise<ApiResponse<UserPreferences>> {
    return this.request('/api/users/preferences', {
      method: 'PUT',
      body: JSON.stringify(preferences),
    });
  }

  // Helper method to get full URL for external use
  getFullUrl(endpoint: string): string {
    return `${this.baseUrl}${endpoint}`;
  }
}

// Create and export singleton instance
export const apiService = new ApiService();

// Export the class for testing or custom instances
export default ApiService;
