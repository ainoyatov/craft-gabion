import ContactForm from "@/components/forms/ContactForm";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 text-center">
      <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Have a question or want to work with us? Fill out the form below and we’ll get back to you shortly.
      </p>
      <ContactForm />
    </div>
  );
};

export default ContactPage;