const endPoint = 'https://prod-in.100ms.live/hmsapi/skype-clone.app.100ms.live/';
const room_id = '620a9ef771bd215ae0421be0';

export default async function getToken(role) {
  const response = await fetch(`${endPoint}api/token`, {
    method: 'POST',
    body: JSON.stringify({
      user_id: '620a9b8971bd215ae0421bd5', 
      role: role,
      room_id,
    }),
  });

  const { token } = await response.json();

  return token;
}