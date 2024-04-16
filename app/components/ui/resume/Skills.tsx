import ListIcon from "./ListIcon";

export default function Skills() {
  return (
    <div className="overflow-hidden relative">
      <h1 className="text-3xl">Skills</h1>
      <div className="">
        <div className="flex items-center space-x-[26px] animate-loop-scroll">
          <ListIcon />
          <ListIcon />
        </div>
      </div>
    </div>
  );
}
