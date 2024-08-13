export const postImage = async (file: File) => {
    try {
        const formData = new FormData();
        formData.append('file', file);

        const apiUrl = `http://localhost:3000/api/images/1`;
        const response = await fetch(apiUrl, {
            method: 'POST',
            mode: 'cors',
            body: formData,
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error:', error);
    }
};

const queryParameters = () => {


}