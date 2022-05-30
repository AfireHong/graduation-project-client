import * as React from "react";
import {
  Image,
  ScrollView,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ScrollViewProps,
  ImageProps,
} from "react-native";
import Lightbox from "react-native-lightbox";

const { width, height } = Dimensions.get("window");

type Event = (data: { currentPage: number; uri: string }) => void;
interface IProps {
  /** List of unique uri images.
   * @default []
   */
  images?: string[];
  /** Called when user swipe to a different page */
  onPageSelected?: Event;
  /** Initial page to show
   * @default 1
   */
  initialPage?: number;
  scrollViewProps?: ScrollViewProps;
  imageProps?: Omit<ImageProps, "source">;
  /** Called when user swipe down */
  onSwipeTop?: Event;
  /** Called when user swipe up */
  onSwipeBottom?: Event;
  /** Replace Image component to use
   * @default Image
   */
  ImageComponent?: any;
}

export const ImageSwiper = ({
  onPageSelected,
  initialPage,
  images = [],
  onSwipeBottom,
  onSwipeTop,
  ImageComponent = Image,
  scrollViewProps,
  imageProps,
}: IProps) => {
  const scrollViewRef = React.createRef<ScrollView>();
  const [currentPage, setCurrentPage] = React.useState(initialPage ?? 1);

  const scrollToInitialPosition = () => {
    scrollViewRef.current?.scrollTo({
      x: width * (currentPage - 1),
    });
  };

  const onScrollEndDrag = (
    e: NativeSyntheticEvent<NativeScrollEvent>,
    uri: string
  ) => {
    if (e.nativeEvent.contentOffset.y < 0) {
      onSwipeBottom?.({ currentPage, uri });
    } else {
      onSwipeTop?.({ currentPage, uri });
    }
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    // ? calculate screenIndex by contentOffset and screen width
    const newPage = parseInt(
      (
        event.nativeEvent.contentOffset.x / Dimensions.get("window").width
      ).toString(),
      10
    );
    if (currentPage !== newPage) {
      setCurrentPage(newPage);
      onPageSelected?.({ currentPage, uri: images[currentPage] });
    }
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      pagingEnabled
      alwaysBounceHorizontal
      onScroll={onScroll}
      scrollEventThrottle={5}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
      }}
      onLayout={scrollToInitialPosition}
      {...(scrollViewProps ?? {})}
    >
      {images.map((uri: string, index: number) => {
        return (
          <ScrollView
            key={index}
            onScrollEndDrag={(e) => onScrollEndDrag(e, uri)}
          >
            <Lightbox>
              <ImageComponent
                source={{ uri }}
                style={{ width, height }}
                {...(imageProps ?? {})}
              />
            </Lightbox>
          </ScrollView>
        );
      })}
    </ScrollView>
  );
};
