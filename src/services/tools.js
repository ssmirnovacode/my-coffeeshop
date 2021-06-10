export const firebaseLoop = snapshot => {
    let data = []
    snapshot.forEach(doc => {
        data.push({
            ...doc.data(),
            id: doc.id
        });
    });
    return data;
}