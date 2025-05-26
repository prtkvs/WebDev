import { submitAction } from "@/actions/form";

export default function Home() {
  return (
    <div className="w-2/3 mx-auto my-12">
      <form action={submitAction}> 
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" className=" mx-4" type="text" />
        </div>
        <div>
          <label htmlFor="add">Address</label>
          <input name="add" id="add" className="mx-4" type="text" />
        </div>
        <div>
          <button className="border border-white px-3">Submit</button>
        </div>
      </form>
    </div>
  );
}
