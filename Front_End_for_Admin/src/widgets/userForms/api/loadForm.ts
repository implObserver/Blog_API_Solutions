export const getForm = async () => {
    try {
        const formData = new FormData();

        const apiUrl = `http://localhost:3000/api/forms/login`;
        const response = await fetch(apiUrl, {
            method: 'GET',
            mode: 'cors',
        });
        const data = await response.text();
        return data;
    } catch (error) {
        console.log('Error:', error);
    }
};