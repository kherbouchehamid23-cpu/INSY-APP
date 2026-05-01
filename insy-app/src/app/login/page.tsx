import { signIn } from "@/auth"

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-black">
      <form
        action={async (formData) => {
          "use server"
          // C'est cette fonction qui appelle ton fichier auth.ts
          await signIn("credentials", formData)
        }}
        className="p-8 bg-white border rounded shadow-md w-96"
      >
        <h1 className="mb-6 text-2xl font-bold text-center">Accès Admin</h1>
        
        <input 
          name="email" 
          type="email" 
          placeholder="admin@insy.fr" 
          required 
          className="block w-full mb-4 p-2 border rounded" 
        />
        
        <input 
          name="password" 
          type="password" 
          placeholder="Mot de passe" 
          required 
          className="block w-full mb-6 p-2 border rounded" 
        />
        
        {/* Le paramètre clé : indique à Auth.js de rediriger vers /admin en cas de succès */}
        <input type="hidden" name="redirectTo" value="/admin" />
        
        <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition">
          Se connecter
        </button>
      </form>
    </div>
  );
}
