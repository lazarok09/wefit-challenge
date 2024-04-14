import Image from "next/image";
const LOADING_ICON = "/icons/loading.svg";
export const Loading = () => {
  return <Image src={LOADING_ICON} height={30} width={30} alt="carregando" />;
};
