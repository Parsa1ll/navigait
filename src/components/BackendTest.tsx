import React, { useState, useEffect } from 'react';
import { apiService } from '../services/api';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const BackendTest: React.FC = () => {
  const [healthStatus, setHealthStatus] = useState<string>('idle');
  const [healthData, setHealthData] = useState<any>(null);
  const [testRoute, setTestRoute] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const testHealthCheck = async () => {
    setLoading(true);
    setHealthStatus('testing');
    
    try {
      const response = await apiService.healthCheck();
      if (response.success) {
        setHealthStatus('success');
        setHealthData(response.data);
      } else {
        setHealthStatus('error');
        setHealthData({ error: response.error });
      }
    } catch (error) {
      setHealthStatus('error');
      setHealthData({ error: 'Network error' });
    } finally {
      setLoading(false);
    }
  };

  const testRouteOptimization = async () => {
    setLoading(true);
    
    try {
      const routeRequest = {
        origin: { lat: 37.7749, lng: -122.4194, address: 'San Francisco, CA' },
        destination: { lat: 37.3382, lng: -121.8863, address: 'San Jose, CA' },
        preferences: { preferredTransport: 'car', optimizeFor: 'time' as const }
      };
      
      const response = await apiService.optimizeRoute(routeRequest);
      if (response.success) {
        setTestRoute(response.data);
      } else {
        setTestRoute({ error: response.error });
      }
    } catch (error) {
      setTestRoute({ error: 'Network error' });
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'bg-green-500';
      case 'error': return 'bg-red-500';
      case 'testing': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'success': return 'Connected';
      case 'error': return 'Failed';
      case 'testing': return 'Testing...';
      default: return 'Not Tested';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🔗 Backend Connection Test
            <Badge variant="outline">Development</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <Button 
              onClick={testHealthCheck} 
              disabled={loading}
              className="min-w-[120px]"
            >
              {loading ? 'Testing...' : 'Test Health Check'}
            </Button>
            
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${getStatusColor(healthStatus)}`} />
              <span className="text-sm font-medium">
                {getStatusText(healthStatus)}
              </span>
            </div>
          </div>

          {healthData && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Health Check Response:</h4>
              <pre className="text-sm overflow-auto">
                {JSON.stringify(healthData, null, 2)}
              </pre>
            </div>
          )}

          <div className="border-t pt-4">
            <Button 
              onClick={testRouteOptimization} 
              disabled={loading}
              variant="outline"
              className="min-w-[120px]"
            >
              {loading ? 'Testing...' : 'Test Route API'}
            </Button>
          </div>

          {testRoute && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Route API Response:</h4>
              <pre className="text-sm overflow-auto">
                {JSON.stringify(testRoute, null, 2)}
              </pre>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>📋 Backend Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Backend URL:</span>
              <span className="ml-2 text-blue-600">http://localhost:8081</span>
            </div>
            <div>
              <span className="font-medium">Frontend URL:</span>
              <span className="ml-2 text-blue-600">http://localhost:8080</span>
            </div>
            <div>
              <span className="font-medium">API Base:</span>
              <span className="ml-2 text-blue-600">/api</span>
            </div>
            <div>
              <span className="font-medium">CORS:</span>
              <span className="ml-2 text-green-600">Configured</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BackendTest;
