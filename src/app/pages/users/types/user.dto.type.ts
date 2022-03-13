export interface UserDTO {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  recruitingRole: number;
  department: number;
  businessUnit: number | null;
  isAdmin: boolean;
}
