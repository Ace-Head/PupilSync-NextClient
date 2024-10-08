// pages/page.tsx
import { Em, Strong, Text } from "@radix-ui/themes";
import styles from "./styles/LandingPage.module.css";
const Home: React.FC = () => {
  return (
    <div>
      <div>
        <Text size="9">
          The <Em>most</Em> important thing to remember is,{" "}
          <Strong>stay positive</Strong>.
        </Text>
      </div>
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <Text size="9">
              The <Em>most</Em> important thing to remember is,{" "}
              <Strong>stay positive</Strong>.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
