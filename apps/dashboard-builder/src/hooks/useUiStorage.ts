import { useMutation, useQuery } from "convex/react";

export function useUiStorage() {
  const saveDashboard = async (dashboardData: any) => {
    console.log("Saving dashboard via generic storage interface:", dashboardData);
  };

  const loadDashboard = async (id: string) => {
    console.log("Loading dashboard via generic storage interface:", id);
    return null;
  };

  return { saveDashboard, loadDashboard };
}
