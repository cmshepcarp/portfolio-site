const nextConfig: NextConfig = {
  experimental: {
    
    allowedDevOrigins: [
      "http://localhost:3000",
      "http://127.0.0.1:3000",
      "http://localhost:3001",
      "http://192.168.1.229:3001",
    ],
  },
};
export default nextConfig;
