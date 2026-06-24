import { AppShell, Burger, Group, ActionIcon, Title, ScrollArea, Stack, Tooltip, Avatar, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSearch, IconBell, IconSettings, IconLayoutSidebarRightCollapse, IconLayoutSidebarRightExpand, IconDashboard, IconDatabase, IconSun, IconMoon } from '@tabler/icons-react';
import { useLayoutStore } from './layoutStore';

export interface AppChromeProps {
  children: React.ReactNode;
  contextBar?: React.ReactNode;
}

export function AppChrome({ children, contextBar }: AppChromeProps) {
  const { sidebarState, contextBarOpen, setSidebarState, toggleContextBar } = useLayoutStore();
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  const toggleSidebar = () => {
    if (sidebarState === 'closed') setSidebarState('open');
    else if (sidebarState === 'open') setSidebarState('compact');
    else if (sidebarState === 'compact') setSidebarState('closed');
  };

  const getNavbarWidth = () => {
    switch (sidebarState) {
      case 'open': return 250;
      case 'compact': return 60;
      case 'closed': return 0;
      case 'undocked': return 250;
      default: return 250;
    }
  };

  const isUndocked = sidebarState === 'undocked';

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: getNavbarWidth(),
        breakpoint: 'sm',
        collapsed: { mobile: sidebarState === 'closed', desktop: sidebarState === 'closed' },
      }}
      aside={{
        width: 300,
        breakpoint: 'md',
        collapsed: { desktop: !contextBarOpen, mobile: !contextBarOpen },
      }}
      padding="md"
    >
      <AppShell.Header style={{ zIndex: 200 }}>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger opened={sidebarState !== 'closed'} onClick={toggleSidebar} size="sm" />
            <Title order={3}>Dashboard</Title>
          </Group>
          <Group>
            <ActionIcon variant="subtle"><IconSearch size={20} /></ActionIcon>
            <ActionIcon variant="subtle"><IconBell size={20} /></ActionIcon>
            <ActionIcon variant="subtle" onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}>
              {computedColorScheme === 'dark' ? <IconSun size={20} /> : <IconMoon size={20} />}
            </ActionIcon>
            <ActionIcon variant="subtle" onClick={toggleContextBar}>
              {contextBarOpen ? <IconLayoutSidebarRightExpand size={20} /> : <IconLayoutSidebarRightCollapse size={20} />}
            </ActionIcon>
            <Avatar color="blue" radius="xl" size="sm">DB</Avatar>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar 
        p={sidebarState === 'compact' ? "xs" : "md"} 
        style={isUndocked ? { position: 'absolute', zIndex: 150, height: 'calc(100vh - 60px)', boxShadow: 'var(--mantine-shadow-md)' } : {}}
      >
        <Stack gap="sm">
          <Tooltip label="Dashboards" disabled={sidebarState !== 'compact'} position="right">
            <Group gap="sm" wrap="nowrap" style={{ cursor: 'pointer' }}>
              <IconDashboard size={24} />
              {sidebarState !== 'compact' && <span>Dashboards</span>}
            </Group>
          </Tooltip>
          <Tooltip label="Data Sources" disabled={sidebarState !== 'compact'} position="right">
            <Group gap="sm" wrap="nowrap" style={{ cursor: 'pointer' }}>
              <IconDatabase size={24} />
              {sidebarState !== 'compact' && <span>Data Sources</span>}
            </Group>
          </Tooltip>
          <Tooltip label="Settings" disabled={sidebarState !== 'compact'} position="right">
            <Group gap="sm" wrap="nowrap" style={{ cursor: 'pointer' }}>
              <IconSettings size={24} />
              {sidebarState !== 'compact' && <span>Settings</span>}
            </Group>
          </Tooltip>
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>
        {children}
      </AppShell.Main>

      <AppShell.Aside>
        <ScrollArea h="100%">
          {contextBar || <div style={{ padding: 'var(--mantine-spacing-md)' }}>Context Bar</div>}
        </ScrollArea>
      </AppShell.Aside>
    </AppShell>
  );
}
