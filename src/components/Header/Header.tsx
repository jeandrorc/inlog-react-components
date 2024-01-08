import React, { ReactNode, useState } from "react";
import {
  Toolbar
} from "@mui/material";
import Logo, { LogoProps } from "../Logo/Logo";
import {
  BaseHeader,
  CenterArea,
  LeftArea,
  PageTitle,
  RightArea,
  RightMenuButtonWrapper,
} from "./Header.styled";

import InputSearch, { InputSearchProps } from "../InputSearch/InputSearch";
import MenuButton from "./MenuButton/MenuButton";
import DrawerMenu, { DrawerMenuProps } from "../DrawerMenu/DrawerMenu";
import MenuAction, { MenuActionProps } from "./MenuAction/MenuAction";

export interface HeaderProps {
  logoPros: LogoProps;
  onMenuClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  showSearch?: boolean;
  inputSearchProps?: InputSearchProps;
  SearchComponent?: ReactNode;
  menuOptions?: MenuActionProps[];
  RightActionsComponent?: ReactNode;
  CenterComponent?: ReactNode;
  drawerMenuProps?: Partial<DrawerMenuProps>;
  hideMenuButton?: boolean;
  pageTitle?: string | ReactNode;
}

/**
 * Componente de cabeçalho (Header) para aplicativos React com Material-UI.
 * Este componente inclui um logotipo, botão de menu, opções de pesquisa, títulos e ações à direita.
 *
 * @component
 * @example
 * const MyHeader = () => {
 *   return (
 *     <Header
 *       logoPros={{...logoProps }}
 *       onMenuClick={(event) => {...handleMenuClickLogic }}
 *       showSearch={true}
 *       inputSearchProps={{...inputSearchProps }}
 *       SearchComponent={<CustomSearchComponent />}
 *       menuOptions={[{...menuOption1 }, {...menuOption2 }]}
 *       RightActionsComponent={<CustomRightActions />}
 *       drawerMenuProps={{/* ...drawerMenuProps }}
 *       hideMenuButton={false}
 *       CenterComponent={<CustomCenterComponent />}
 *       pageTitle="My Page Title"
 *     />
 *   );
 * };
 *
 * @param {Object} props - Propriedades do componente.
 * @param {LogoProps} props.logoPros - Propriedades do logotipo a serem passadas para o componente Logo.
 * @param {function} [props.onMenuClick] - Função chamada quando o botão do menu é clicado.
 * @param {boolean} [props.showSearch] - Indica se a barra de pesquisa deve ser exibida.
 * @param {InputSearchProps} [props.inputSearchProps] - Propriedades da barra de pesquisa.
 * @param {ReactNode} [props.SearchComponent] - Componente de pesquisa personalizado.
 * @param {MenuActionProps[]} [props.menuOptions] - Opções de menu à direita.
 * @param {ReactNode} [props.RightActionsComponent] - Componente de ações à direita.
 * @param {ReactNode} [props.CenterComponent] - Componente central.
 * @param {string|ReactNode} [props.pageTitle] - Título da página exibido à esquerda.
 * @param {boolean} [props.hideMenuButton] - Indica se o botão do menu deve ser ocultado.
 *
 * @returns {ReactNode} Retorna o componente Header.
 */

const Header: React.FC<HeaderProps> = ({
  logoPros,
  onMenuClick,
  showSearch,
  inputSearchProps,
  SearchComponent,
  menuOptions,
  RightActionsComponent,
  drawerMenuProps,
  hideMenuButton = false,
  CenterComponent,
  pageTitle,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false); // New state for Drawer open/close

  // New handler for Drawer open/close
  const handleDrawerOpenClose = () => {
    setDrawerOpen(!drawerOpen);
  };


  const titleComponent = typeof pageTitle === 'string' ? <PageTitle variant="h1">{pageTitle}</PageTitle> : pageTitle;

  const MenuComponent = () => {
    return !hideMenuButton ? (<RightMenuButtonWrapper>
      <MenuButton onMenuClick={onMenuClick || handleDrawerOpenClose} />
      </RightMenuButtonWrapper>) : null;
  }

  return (
    <BaseHeader position="static">
      <Toolbar>
        <LeftArea>
         <MenuComponent/>
          <Logo {...logoPros} />
          {pageTitle && titleComponent}
        </LeftArea>
        <CenterArea>
          {showSearch && !SearchComponent && (
            <InputSearch {...inputSearchProps} />
          )}
          { CenterComponent &&  CenterComponent}
        </CenterArea>
        <RightArea>
          { menuOptions?.map(option => <MenuAction {...option}/>)}
          {RightActionsComponent && <>{RightActionsComponent}</>}
        </RightArea>
      </Toolbar>
      <DrawerMenu
        {...drawerMenuProps}
        open={drawerOpen}
        onClose={handleDrawerOpenClose}
      />
    </BaseHeader>
  );
};

export default Header;
