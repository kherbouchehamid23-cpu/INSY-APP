export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="p-8 border rounded shadow">
        <h1 className="mb-4 text-xl font-bold">Connexion Admin</h1>
        <input name="email" type="email" placeholder="Email" className="block w-full mb-2 p-2 border" />
        <input name="password" type="password" placeholder="Mot de passe" className="block w-full mb-4 p-2 border" />
        <button type="submit" className="w-full p-2 bg-blue-600 text-white">Se connecter</button>
      </form>
    </div>
  );
}
