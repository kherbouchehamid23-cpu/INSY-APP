import { auth, signOut } from '@/auth';
import { redirect } from 'next/navigation';
import { AdminDashboard } from '@/components/AdminDashboard';

export default async function Admin() {
  const session = await auth();
  
  if (!session) {
    redirect('/login');
  }

  // Action serveur passée au composant client pour gérer la déconnexion
  async function handleSignOut() {
    "use server";
    await signOut({ redirectTo: '/login' });
  }

  return <AdminDashboard onSignOut={handleSignOut} />;
}
