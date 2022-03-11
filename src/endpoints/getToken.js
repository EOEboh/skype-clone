const endPoint = process.env.REACT_APP_TOKEN_ENDPOINT;
const room_id = process.env.REACT_APP_ROOM_ID;

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