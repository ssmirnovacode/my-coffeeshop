export const firebaseLoop = snapshot => {
    let data = []
    snapshot.forEach(doc => {
        data.push({
            ...doc.data(),
            id: doc.id
        });
    });
    return data;
};

export const formatDate = (timestamp) => {

    const date = new Date(timestamp.seconds * 1000).toISOString().substring(0,10).split('-').reverse().join('.');
    const time = new Date(timestamp.seconds * 1000).toISOString().substring(11,19);
    return date + ' at ' + time;
}