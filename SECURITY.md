# Security Configuration

## API Keys

This application uses pre-configured Resend API keys for email functionality. The keys are embedded in the application code for automatic operation.

### Operadoras and Email Addresses:
- **Amil**: coteamilsuccesso@gmail.com
- **Bradesco**: cotebradescosucesso@gmail.com  
- **MedSênior**: cotemedseniorsucesso@gmail.com
- **SulAmérica**: cotesulamericasucesso@gmail.com

### Security Features:
1. **Server-side validation**: All form data is validated on the server
2. **Email validation**: Email format is checked before processing
3. **Phone validation**: DDD and phone number length are validated
4. **Rate limiting**: Consider adding rate limiting for production use
5. **HTTPS only**: Deploy only on secure HTTPS connections

### Production Recommendations:
For production environments, consider:
- Moving API keys to environment variables
- Implementing rate limiting
- Adding CAPTCHA to prevent bot submissions
- Setting up monitoring and alerts
- Using a WAF (Web Application Firewall)

## Deployment

When deploying to production:
1. Ensure all API keys are valid and active
2. Test email delivery for all operadoras
3. Monitor error logs regularly
4. Set up backup email delivery methods
