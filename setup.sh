#!/bin/bash

# Belabloom Website - Setup Script
# This script sets up the project for development

echo "🌸 Belabloom Website Setup"
echo "=========================="
echo ""

# Check Node.js version
echo "Checking Node.js version..."
node_version=$(node -v)
echo "✓ Node.js $node_version"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install
echo "✓ Dependencies installed"
echo ""

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local..."
    cp .env.example .env.local
    echo "✓ .env.local created (please update with your settings)"
else
    echo "✓ .env.local already exists"
fi
echo ""

# Build the project
echo "🏗️  Building project..."
npm run build
echo "✓ Build complete"
echo ""

echo "✨ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update .env.local with your email service credentials"
echo "2. Update content in app/*/page.tsx files"
echo "3. Add company logo and images to public/images/"
echo "4. Run: npm run dev"
echo ""
echo "Happy coding! 🚀"
