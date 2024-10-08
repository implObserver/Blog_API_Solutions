export const getTagList = (currentTag: string) => {
    const allTags = ['Other', 'Travel', 'Sport', 'Tech', 'Books'];
    return allTags.filter(tag => tag !== currentTag);
}