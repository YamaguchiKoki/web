import { handleFailed, handleSucceed, path } from "@/features/api/common"

export function createUser(payload: {
    email: string,
    password: string,
    screen_name: string
}) {
    console.log(path('/api/user/create'));
    return fetch(path('/api/user/create'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    }).then(handleSucceed).then(handleFailed);
}