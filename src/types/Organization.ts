export default interface Organization{
  id: number;
  name: string;
  title: string;
  description: string;
  isVerified: boolean;
  members: number;
  repositories: number;
  logo: string;
  location: string;
}
