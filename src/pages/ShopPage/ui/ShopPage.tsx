import { HeaderPortal } from "@widgets/Header";
import { HorizontalScrollList } from "@shared/components";
import { AdvertisementCard } from "@entities/gift";
import {
  SActions,
  SShopHeader,
  STitle,
  SButton,
  STitleText,
  SFilter,
  SShopPage,
} from "./shopPage.styles";
import { AddingBalance } from "@widgets/AddingBalance";
import { RepeatTime } from "@shared/assets";
import { useNavigate } from "react-router-dom";
import { routes } from "@shared/config";
import { ShopSort } from "@entities/shop";
import { ShopFilter } from "@features/ShopFilter";

const ShopPage = () => {
  const navigate = useNavigate();
  const handleToHistory = () => navigate(routes.shopHistory);

  return (
    <SShopPage>
      <HeaderPortal>
        <SShopHeader>
          <STitle>
            <STitleText>Магазин</STitleText>
            <SActions>
              <AddingBalance />
              <SButton onClick={handleToHistory} icon={<RepeatTime />} />
            </SActions>
          </STitle>
          <HorizontalScrollList
            list={[1, 2, 3, 4]}
            itemContent={() => <AdvertisementCard />}
            loading={false}
          />

          <SFilter>
            <ShopSort />
            <ShopFilter />
          </SFilter>
        </SShopHeader>
      </HeaderPortal>

      <div>dffff</div>
    </SShopPage>
  );
};

export default ShopPage;
