export const guidance: Record<
  string,
  { what: string; why: string; how: string }
> = {
  performance_page_speed_mobile: {
    what: "Your website's mobile PageSpeed score is lower than recommended.",
    why: 'Mobile speed is crucial. Slow loading times frustrate visitors, leading to higher bounce rates, lower engagement, and negatively impacting search engine rankings (especially Google). A fast mobile experience is essential for capturing and retaining users on the go.',
    how: 'Optimize images (compress and resize), enable browser caching, minimize code (CSS, JavaScript), reduce server response time, and consider using a Content Delivery Network (CDN). Tools like Google PageSpeed Insights offer specific recommendations for your site.',
  },
  performance_https_security: {
    what: 'Your website is not using HTTPS consistently or has an invalid security certificate.',
    why: "HTTPS encrypts data between the user's browser and your server, protecting sensitive information (like contact forms or logins). Browsers flag non-HTTPS sites as 'Not Secure,' damaging trust. Google also uses HTTPS as a positive ranking signal.",
    how: "Install an SSL/TLS certificate on your web server. Many hosting providers offer free certificates (e.g., Let's Encrypt) or include them in plans. Ensure your website automatically redirects all HTTP traffic to HTTPS.",
  },
  seo_title_tag: {
    what: 'Your homepage is missing a title tag (<title>) or the tag is empty.',
    why: "The title tag is a primary piece of information search engines use to understand your page's topic. It's often displayed in search results and browser tabs. A missing or empty title severely hinders SEO.",
    how: "Edit your homepage's HTML head section. Add a concise, descriptive title tag relevant to your business and location, including your main keyword(s). Example: `<title>Best Bakery in Anytown | Fresh Bread & Cakes | [Your Business Name]</title>`.",
  },
  seo_meta_description: {
    what: 'Your homepage is missing a meta description tag (<meta name="description"...>) or its content is empty.',
    why: 'The meta description provides a brief summary of your page in search results. While not a direct ranking factor, a compelling description encourages users to click on your link, improving click-through rate (CTR).',
    how: 'Edit your homepage\'s HTML head section. Add a meta description tag with engaging content (around 155-160 characters) that accurately summarizes the page and includes a call-to-action or key value proposition. Example: `<meta name="description" content="Visit [Your Business Name] for the best fresh bread, pastries, and custom cakes in Anytown. Order online or stop by today!">`.',
  },
  seo_h1_heading: {
    what: 'Your homepage does not have exactly one H1 heading tag (<h1>).',
    why: 'The H1 tag is typically the main headline of your page. Search engines use it to understand the primary topic. Having zero or multiple H1s can confuse search engines and dilute SEO value.',
    how: "Review your homepage's content structure. Ensure there is one (and only one) H1 tag that clearly describes the main subject of the page, usually incorporating your primary keyword. Other headings should use H2, H3, etc., hierarchically.",
  },
  seo_image_alt_text: {
    what: "A significant portion (over 20%) of the images on your homepage are missing descriptive 'alt' text.",
    why: "Alt text (the `alt` attribute in `<img>` tags) describes the image for search engines (which can't 'see' images) and screen readers used by visually impaired visitors. It improves SEO and accessibility.",
    how: 'Review all `<img>` tags on your homepage. Add a concise, descriptive `alt` attribute to each image that conveys its content or purpose. For decorative images, use an empty `alt=""`.',
  },
  seo_sitemap: {
    what: 'A sitemap.xml file could not be found at the standard location (/sitemap.xml) on your website.',
    why: "A sitemap helps search engines like Google discover and index all the important pages on your website more efficiently. While not strictly mandatory, it's highly recommended for SEO.",
    how: "Generate a sitemap.xml file (most CMS platforms like WordPress have plugins or built-in tools for this). Upload it to your website's root directory. Submit the sitemap location to Google Search Console.",
  },
  conversion_cta_buttons: {
    what: 'No clear Call-to-Action (CTA) buttons or links were found on your homepage.',
    why: "CTAs guide visitors towards desired actions (e.g., 'Learn More', 'Contact Us', 'Shop Now'). Without clear CTAs, potential customers may not know what step to take next, reducing conversions.",
    how: "Identify the primary action you want visitors to take. Add prominent buttons or links with clear, action-oriented text (e.g., 'Get a Free Quote', 'Download Guide', 'Sign Up Today') in relevant sections of your homepage.",
  },
  conversion_form_presence: {
    what: 'No HTML forms (<form>) were detected on your homepage.',
    why: 'Forms are essential for lead generation (contact forms, quote requests, newsletter sign-ups). Without a form, you might be missing opportunities to capture visitor information directly on your homepage.',
    how: "If appropriate for your goals, embed a relevant form on your homepage. This could be a simple contact form, an email subscription box, or a quote request form. Ensure it's easy to find and use.",
  },
  conversion_contact_method: {
    what: "No clear contact method (like a 'mailto:' link or a link to a contact page) was found.",
    why: 'Visitors need an easy way to contact you. Missing or hard-to-find contact information creates friction and can lead to lost business opportunities.',
    how: "Ensure your contact information (phone number, email address) is visible, preferably in the header or footer. Include a clear link to a dedicated 'Contact Us' page or use a 'mailto:' link for email addresses (`<a href=\"mailto:info@yourdomain.com\">Email Us</a>`).",
  },
  branding_logo_presence: {
    what: 'A logo image was not clearly identified in the typical header/top section of your homepage.',
    why: 'Your logo is a key part of your brand identity. It builds recognition and trust. It should be prominently displayed, usually at the top of every page.',
    how: 'Ensure your logo image is placed in the header section of your website. Use standard HTML/CSS practices. Make sure the image file is optimized for the web and includes descriptive alt text (e.g., `alt="[Your Company Name] Logo"`).',
  },
  branding_professional_domain: {
    what: 'Your website appears to be hosted on a free subdomain platform (e.g., yoursite.wordpress.com, yoursite.blogspot.com).',
    why: 'Using a custom domain name (e.g., www.yourcompany.com) appears more professional and credible than using a free subdomain. It also gives you more control and is better for long-term branding and SEO.',
    how: 'Register a custom domain name through a domain registrar (like GoDaddy, Namecheap, Google Domains). Configure your website platform/hosting to use your custom domain instead of the free subdomain.',
  },
  presence_social_media_links: {
    what: 'Fewer than two links to common social media platforms (Facebook, Instagram, LinkedIn, Twitter/X) were found.',
    why: 'Linking to your active social media profiles helps visitors connect with your brand on other platforms, builds community, and can provide social proof.',
    how: 'Add icons or links to your main social media profiles in a visible location, typically the header or footer of your website.',
  },
  presence_google_presence: {
    what: 'No link that typically indicates a Google Business Profile (formerly Google My Business) was found.',
    why: 'For local businesses, a Google Business Profile is crucial for visibility in local search results and maps. Linking to it helps customers find your location, hours, reviews, etc.',
    how: 'If you have a physical location or serve a local area, create or claim your Google Business Profile. Consider adding a link to your Google Maps listing or search results page on your website, especially on contact or location pages.',
  },
}
