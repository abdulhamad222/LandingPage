import dbConnect from '@/config/db';
import contactModel from '@/model/contactModel';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await dbConnect();

    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newContact = new contactModel({ name, email, subject, message });
    await newContact.save();

    return res.status(200).json({ message: 'Message saved successfully' });
  } catch (err) {
    console.error('Contact save error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
}
