export async function getAllUsers() {
    const response = await fetch('/api/all-users');
    return await response.json();
}
