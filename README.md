# Homnaro static website

This is a dependency-free static site designed for GitHub Pages and the `homnaro.in` custom domain.

## Publish

1. Upload the complete contents of this folder to the root of the GitHub Pages repository.
2. Keep the `CNAME` file; it preserves the `homnaro.in` custom-domain configuration.
3. In GitHub repository **Settings → Pages**, deploy from the `main` branch and `/ (root)`.
4. Confirm the custom domain and HTTPS settings in GitHub Pages after deployment.

## Update business details

Edit `config.js` to update confirmed business information in one place: phone and WhatsApp number, email, confirmed Bengaluru service areas, service descriptions, and pricing message.

Do not populate service areas, ratings, metrics, email, pricing or business claims until they are confirmed.

## Booking form

The booking form intentionally does **not** send or store customer data. It prepares a WhatsApp message with the entered request. Connect it to a secure backend before treating it as a stored online booking system.

## Analytics

No analytics ID is included. Add an approved analytics implementation separately once its tracking ID and privacy obligations are confirmed.
