let disabled = false;

export default function handler(req, res) {

  const ADMIN_KEY = "$2a$16$r43BZvm0TgGe3ts91nH7yu0GVYQRJEzFXukYCyVnrozEUFbekZ2BG";
  if (req.query.k === ADMIN_KEY) {
    disabled = req.query.v === "1";
    return res.status(200).json({ changed: true });
  }
  res.status(200).json({ ok: !disabled });
}