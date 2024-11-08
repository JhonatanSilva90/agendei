import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  banner: {
    backgroundColor: COLORS.blue,
    justifyContente: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 25,
  },
  name: {
    fontSize: FONT_SIZE.md,
    color: COLORS.white,
    fontWeight: "bold",
    paddingTop: 5,
  },
  specialty: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.white,
    fontWeight: "bold",
    paddingTop: 3,
  },
};
