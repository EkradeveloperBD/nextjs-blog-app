// formValidate.js

export default function validateForm(formData) {
    const errors = {};

    if (!formData.name) {
        errors.name = 'Name is required';
    }

    if (!formData.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Invalid email format';
    }

    if (!formData.website) {
        errors.website = 'Website is required';
    } else if (!/^https?:\/\/.+/.test(formData.website)) {
        errors.website = 'Invalid website URL format';
    }

    if (!formData.message) {
        errors.message = 'Message is required';
    }

    return errors;
}
