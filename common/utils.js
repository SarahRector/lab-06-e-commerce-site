export function findById(wares, id) {
    for (let i = 0; i < wares.length; i++) {
        const ware = wares[i];

        if (ware.id === id) {
            return ware;
        }
    }
    return null;
}