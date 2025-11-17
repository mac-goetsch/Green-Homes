export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }
    
    const { firstName, lastName, email, phone, projectType, location, timeline, message } = req.body;
    
    if (!firstName || !lastName || !email || !projectType) {
        return res.status(400).json({ message: 'Required fields missing' });
    }
    
    try {
        console.log('Form submission:', req.body);
        return res.status(200).json({ message: 'Thank you! We will contact you within 24 hours.' });
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
}
