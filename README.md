# Ineffable Emailer

A serverless email service built with SST (Serverless Stack) and AWS SES (Simple Email Service). This project provides a simple API endpoint for sending emails through AWS SES.

## Features

- Serverless architecture using SST
- AWS SES integration for reliable email delivery
- Environment-specific configurations (dev, staging, production)
- CORS support for web applications
- TypeScript support

## Prerequisites

- Node.js (latest LTS version recommended)
- AWS CLI configured with appropriate credentials
- SST CLI (`npm install -g sst`)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/theboyknowsclass/emailer.git
cd emailer
```

2. Install dependencies:
```bash
npm install
```

## Development

To start the development environment:

```bash
npm run dev
```

This will start the SST development environment with hot reloading.

## Project Structure

- `src/` - Source code directory
- `sst.config.ts` - SST configuration file
- `package.json` - Project dependencies and scripts

## Environment Configuration

The project supports multiple environments:
- Development (dev)
- Staging
- Production

Each environment has its own:
- AWS profile configuration
- Email sender address
- CORS settings

## API Usage

The service exposes an API endpoint for sending emails. The endpoint URL will be displayed in the console when running the development server.

### CORS Configuration

- Production/Staging: Only allows requests from `https://ineffableconsulting.com`
- Development: Allows all origins

## Dependencies

- `@aws-sdk/client-sesv2`: AWS SES client
- `sst`: Serverless Stack framework
- `@types/aws-lambda`: TypeScript types for AWS Lambda

## License

ISC

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request 