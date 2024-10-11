export const timeAgo = (date: Date) => { // Принимаем объект Date
    const now = new Date();
    const secondsDifference = Math.floor((now.getTime() - date.getTime()) / 1000); // Разница в секундах
    const intervals = [
        { label: 'секунд', seconds: 60 },
        { label: 'минут', seconds: 3600 },
        { label: 'часов', seconds: 86400 },
        { label: 'дней', seconds: 2592000 },
        { label: 'месяцев', seconds: 31536000 },
    ];

    if (secondsDifference < 60) {
        return secondsDifference === 1 ? '1 секунда назад' : `${secondsDifference} секунд назад`;
    }

    for (let i = 0; i < intervals.length; i++) {
        const intervalSeconds = intervals[i].seconds;
        if (secondsDifference < intervalSeconds) {
            const previousIntervalSeconds = intervals[i - 1]?.seconds;
            const count = Math.floor(secondsDifference / (previousIntervalSeconds || 1));
            return count === 1 ? `1 ${intervals[i].label} назад` : `${count} ${intervals[i].label} назад`;
        }
    }

    const years = Math.floor(secondsDifference / 31536000);
    return years === 1 ? '1 год назад' : `${years} лет назад`;
};