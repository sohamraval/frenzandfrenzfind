import '@rainbow-me/rainbowkit/styles.css';
import "@/styles/globals.css";
import "@/styles/satoshi.css";
import SEO from "../../next-seo.config";
import { DefaultSeo } from "next-seo";
import { RainbowKitProvider, getDefaultWallets, lightTheme, AvatarComponent } from "@rainbow-me/rainbowkit";
import { WagmiConfig, configureChains, createClient } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { mainnet } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { infuraProvider } from "wagmi/providers/infura";
import { darkTheme } from "@rainbow-me/rainbowkit";


const { chains, provider } = configureChains(
  [mainnet],
  [infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURA_KEY })],
  // [polygonMumbai],
  // [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_PROVIDER_KEY })],
);

const { connectors } = getDefaultWallets({
  appName: "FRENZ",
  projectId: "e71036ce09395514aa677996879fba0f",
  chains,
});


const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}
        theme={darkTheme()}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
