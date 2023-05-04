export default function handler(req, res) {
    const { username, password } = req.body;
  
    // Check if the username and password match
    if (username === 'username' && password === 'password') {
      res.status(200).json({ message: 'Success' });
    } else {
      res.status(401).json({ message: 'Incorrect username or password' });
    }
  }