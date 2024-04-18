type HeaderProps = {
  title: string;
  description: string;
  textAlign?: "center" | "left" | "right";
};

export default function Header({
  title,
  description,
  textAlign = "left",
}: HeaderProps) {
  return (
    <div className={`mb-5 text-${textAlign} `}>
      <h1 className="text-[30px] font-[700]">{title}</h1>
      <p className="text-[18px] text-gray font-[400]">{description}</p>
    </div>
  );
}
