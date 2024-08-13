export const postUser = async (data: userFormType) => {
    try {
        const apiUrl = `http://localhost:3000/sign-up`;
        const response = await fetch(apiUrl, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                "username": data.username,
                "password": data.password
            }),
            headers: {
                'content-type': 'application/json',
            }
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.log('Error:', error);
    }
};