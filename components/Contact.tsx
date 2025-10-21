import React, { useState, useRef, useEffect } from 'react';
import Spinner from './icons/Spinner';
import UserIcon from './icons/UserIcon';
import MailIcon from './icons/MailIcon';

const MAX_MESSAGE_LENGTH = 2000;

// TODO: Replace with your own Formspree form ID
// 1. Go to https://formspree.io/
// 2. Create a new form and set the recipient email to techpearlcreators@gmail.com
// 3. Copy the Form ID from the integration tab and paste it here.
const FORMSPREE_FORM_ID = 'manppdjb';

type FormState = {
  name: string;
  email: string;
  message: string;
};

type ErrorState = FormState;
type TouchedState = {
  [K in keyof FormState]: boolean;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<ErrorState>({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState<TouchedState>({ name: false, email: false, message: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{ message: string; success: boolean } | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [formData.message]);

  const validateField = (name: keyof FormState, value: string): string => {
    switch (name) {
      case 'name':
        return value.trim() ? '' : 'Your name is required.';
      case 'email':
        if (!value.trim()) return 'Your email is required.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address.';
        return '';
      case 'message':
        return value.trim() ? '' : 'A message is required.';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as { name: keyof FormState; value: string };
    setFormData(prev => ({ ...prev, [name]: value }));

    // Set touched on the first change to enable immediate validation feedback
    if (!touched[name]) {
      setTouched(prev => ({ ...prev, [name]: true }));
    }

    // Validate on every keystroke to provide real-time feedback
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as { name: keyof FormState; value: string };
    
    // This is crucial for accessibility and usability. If a user tabs
    // through a field without typing, it should still be marked as
    // touched and validated on blur.
    if (!touched[name]) {
      setTouched(prev => ({ ...prev, [name]: true }));
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    };
    
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.values(newErrors).some(error => error)) return;

    setIsSubmitting(true);
    setSubmissionStatus(null);
    
    // FIX: Removed obsolete "demo mode" check. The FORMSPREE_FORM_ID is set,
    // making the check for a placeholder value dead code and causing a type error.

    // Proceed with real submission
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setSubmissionStatus({ message: 'Thank you for your message! We will get back to you shortly.', success: true });
        setFormData({ name: '', email: '', message: '' });
        setTouched({ name: false, email: false, message: false });
      } else {
        const data = await response.json();
        const errorMessage = data.errors ? data.errors.map((error: { message: string }) => error.message).join(', ') : 'Oops! Something went wrong.';
        setSubmissionStatus({ message: `Submission failed: ${errorMessage}`, success: false });
      }
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        setSubmissionStatus({ message: `Submission failed: ${errorMessage}`, success: false });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmissionStatus(null), 6000);
    }
  };

  const charCountColor = formData.message.length > MAX_MESSAGE_LENGTH * 0.9 ? 'text-red-500' : 'text-gray-400';
  
  const getInputState = (name: keyof FormState) => {
    const hasError = touched[name] && !!errors[name];
    const isValid = touched[name] && !errors[name] && !!formData[name];
    return { hasError, isValid };
  };

  const getInputClasses = (name: keyof FormState, isTextarea: boolean = false) => {
    const { hasError, isValid } = getInputState(name);
    const padding = isTextarea ? "pt-6 pb-2 px-1" : "pt-6 pb-2 pl-8 pr-4";
    const baseClasses = `peer block w-full ${padding} text-gray-800 bg-transparent border-b-2 appearance-none focus:outline-none focus:ring-0 disabled:opacity-50 transition-colors duration-300`;

    let borderClasses = 'border-gray-300 focus:border-teal';
    if (hasError) borderClasses = 'border-red-500 focus:border-red-500';
    if (isValid) borderClasses = 'border-green-500 focus:border-green-500';
    
    return `${baseClasses} ${borderClasses}`;
  };

  const getLabelClasses = (name: keyof FormState) => {
      const { hasError } = getInputState(name);
      const baseClasses = "absolute text-base text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] pointer-events-none";
      const peerStateClasses = "peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4";
      
      let colorClass = 'peer-focus:text-teal';
      if (hasError) {
          colorClass = 'text-red-600 peer-focus:text-red-600';
      }

      return `${baseClasses} ${peerStateClasses} ${colorClass}`;
  };

  const getIconClasses = (name: keyof FormState) => {
    const { hasError, isValid } = getInputState(name);
    let colorClass = 'text-gray-400';
    if (hasError) colorClass = 'text-red-500';
    if (isValid) colorClass = 'text-green-500';
    return `h-5 w-5 ${colorClass} transition-colors duration-300`;
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you and discuss how we can help bring your ideas to life.
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="relative z-0">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20">
                <UserIcon className={getIconClasses('name')} />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={getInputClasses('name')}
                placeholder=" "
              />
              <label htmlFor="name" className={`${getLabelClasses('name')} left-8`}>
                Your Name
              </label>
              {touched.name && errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
            </div>

            <div className="relative z-0">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20">
                <MailIcon className={getIconClasses('email')} />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={getInputClasses('email')}
                placeholder=" "
              />
              <label htmlFor="email" className={`${getLabelClasses('email')} left-8`}>
                Your Email
              </label>
              {touched.email && errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
            </div>

            <div className="relative z-0">
              <textarea
                id="message"
                name="message"
                rows={1}
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                ref={textareaRef}
                maxLength={MAX_MESSAGE_LENGTH}
                className={`${getInputClasses('message', true)} resize-none overflow-hidden`}
                placeholder=" "
              ></textarea>
              <label htmlFor="message" className={`${getLabelClasses('message')} left-1`}>
                Your Message
              </label>
              <div className={`absolute bottom-3 right-1 text-xs font-medium pointer-events-none ${charCountColor}`}>
                {formData.message.length} / {MAX_MESSAGE_LENGTH}
              </div>
              {touched.message && errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3 bg-teal text-white font-semibold rounded-lg shadow-lg hover:bg-teal-dark transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Spinner />
                    <span className="ml-2">Sending...</span>
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
            {submissionStatus && (
              <div className={`mt-4 text-center p-3 rounded-lg text-sm ${
                submissionStatus.success 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {submissionStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;