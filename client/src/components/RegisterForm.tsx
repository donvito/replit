import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertRegistrationSchema, type InsertRegistration } from "@db/schema";
import { registerUser } from "../lib/api";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function RegisterForm() {
  const { toast } = useToast();

  const form = useForm<Omit<InsertRegistration, "id" | "createdAt">>({
    resolver: zodResolver(insertRegistrationSchema.omit({ id: true, createdAt: true })),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      toast({
        title: "Registration successful!",
        description: "You've been added to our waitlist.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Registration failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="space-y-4">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Full Name" className="h-12" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email Address" className="h-12" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full h-12"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Joining..." : "Join Waitlist"}
        </Button>
      </form>
    </Form>
  );
}