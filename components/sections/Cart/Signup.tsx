import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SignupProps {
  setUser: (auth: boolean) => void;
}

const Signup = ({ setUser }: SignupProps) => {
  return (
    <div className="p-10">
      <div>
        <div className="flex flex-col">
          <span className="font-bold">New User ?</span>
          <span>Create an account in 10 seconds</span>
        </div>
        <div className="flex flex-col my-5 gap-y-3">
          <div className="flex items-center gap-5">
            <div className="flex flex-col gap-y-2 flex-1">
              <label htmlFor="firstname">First Name</label>
              <Input id="firstname" type="text" placeholder="First Name" />
            </div>
            <div className="flex flex-col gap-y-2 flex-1">
              <label htmlFor="lastname">Last Name</label>
              <Input id="lastname" type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex flex-col gap-y-2 flex-1">
              <label htmlFor="email">Email</label>
              <Input id="email" type="email" placeholder="Email" />
            </div>
            <div className="flex flex-col gap-y-2 flex-1">
              <label htmlFor="phone">Phone Number</label>
              <Input id="phone" type="text" placeholder="Phone Number" />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex flex-col gap-y-2 flex-1">
              <label htmlFor="address">Address</label>
              <Input id="address" type="address" placeholder="Address" />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex flex-col gap-y-2 flex-1">
              <label htmlFor="city">City</label>
              <Input id="city" placeholder="City" />
            </div>
            <div className="flex flex-col gap-y-2 flex-1">
              <label htmlFor="state">State</label>
              <Input id="state" placeholder="State" />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex flex-col gap-y-2 flex-1">
              <label htmlFor="country">Country</label>
              <Input id="country" placeholder="Country" />
            </div>
            <div className="flex flex-col gap-y-2 flex-1">
              <label htmlFor="pincode">Pin Code</label>
              <Input id="pincode" placeholder="Pin Code" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-5">
          <Button>Sign In</Button>
          <p>
            Already have an account?
            <span
              onClick={() => setUser(true)}
              className="ml-2 text-bg-primary font-semibold underline"
            >
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
