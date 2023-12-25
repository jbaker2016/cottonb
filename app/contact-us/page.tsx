import { Button } from "@/components/ui/button";

export default function AboutUs() {

    return(
      <form className="mx-auto max-w-3xl mt-8">
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <Button type="submit" value="Send" >Submit</Button>
      </form>
    )
}