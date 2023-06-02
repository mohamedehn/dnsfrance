import nodemailer from 'nodemailer';


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, subject, message, phone } = req.body;

    const mail = {
      from: firstName,
      to: process.env.EMAIL_ADDRESS,
      subject: "Formulaire de contact Data Network Solutions",
      html: `
        <p>Nom: ${lastName}<p>
        <p>Prénom: ${firstName}<p>
        <p>Email: ${email}<p>
        <p>Téléphone: ${phone}<p>
        <p>Objet: ${subject}<p> 
        <p>Message: ${message}<p> 
        `
    };

    try {
      const contactEmail = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_ADDRESS,
          pass: process.env.EMAIL_PASS,
        },
      });

      await contactEmail.sendMail(mail);
      res.status(200).json({ message: 'Message envoyé avec succès' });
    } catch (error) {
      console.error("Une erreur s'est produite:", error);
      res.status(500).json({ error: "Une erreur s'est produite lors de l'envoi du message." });
    }
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}