export const getTagList = (currentTag: string) => {
    console.log(currentTag)
    const allTags = ['Other', 'Travel', 'Sport', 'Tech', 'Books'];
    return allTags.filter(tag => tag !== currentTag);
}