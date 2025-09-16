import Navbar from "@/components/navbar"
import { 
  PageContainer, 
  SectionContainer, 
  CardContainer, 
  GridContainer, 
  FlexContainer 
} from "@/components/responsive-container"
import { 
  HeroLayout, 
  ContentLayout, 
  TextLayout, 
  ResponsiveHeading, 
  ResponsiveText,
  MobileOnly,
  TabletOnly,
  DesktopOnly,
  MobileAndTablet,
  TabletAndDesktop
} from "@/components/responsive-layout"
import GlowingSection from "@/components/glowing-section"

export default function DemoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <PageContainer>
          <div className="space-y-16">
            {/* Hero Section */}
            <SectionContainer>
              <div className="text-center space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient">
                  Responsive Components Demo
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                  Explore our responsive navbar and content containers that adapt seamlessly across all device sizes.
                </p>
              </div>
            </SectionContainer>

            {/* Basic Container Examples */}
            <SectionContainer>
              <h2 className="text-3xl font-bold mb-8 text-center">Container Variants</h2>
              
              <div className="space-y-8">
                {/* Page Container */}
                <CardContainer>
                  <h3 className="text-xl font-semibold mb-4">Page Container</h3>
                  <p className="text-muted-foreground">
                    Perfect for main page content with consistent padding and max-width constraints.
                    This container ensures content doesn't get too wide on large screens while
                    maintaining proper spacing on mobile devices.
                  </p>
                </CardContainer>

                {/* Section Container */}
                <CardContainer>
                  <h3 className="text-xl font-semibold mb-4">Section Container</h3>
                  <p className="text-muted-foreground">
                    Ideal for content sections with built-in vertical padding that scales
                    responsively. Great for separating different parts of your page.
                  </p>
                </CardContainer>

                {/* Custom Responsive Container */}
                <div className="max-w-lg mx-auto p-6 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="text-xl font-semibold mb-4">Custom Container</h3>
                  <p className="text-muted-foreground">
                    Fully customizable with different max-widths, padding options, and styling.
                    You can control every aspect of the container's behavior.
                  </p>
                </div>
              </div>
            </SectionContainer>

            {/* Grid Layout Examples */}
            <SectionContainer>
              <h2 className="text-3xl font-bold mb-8 text-center">Grid Layouts</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">2-Column Grid</h3>
                  <GridContainer cols="2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <CardContainer key={i}>
                        <h4 className="font-semibold mb-2">Card {i + 1}</h4>
                        <p className="text-sm text-muted-foreground">
                          This card automatically adjusts to the available space in the grid.
                        </p>
                      </CardContainer>
                    ))}
                  </GridContainer>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">3-Column Grid</h3>
                  <GridContainer cols="3">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <CardContainer key={i}>
                        <h4 className="font-semibold mb-2">Item {i + 1}</h4>
                        <p className="text-sm text-muted-foreground">
                          Responsive grid that stacks on mobile and expands on larger screens.
                        </p>
                      </CardContainer>
                    ))}
                  </GridContainer>
                </div>
              </div>
            </SectionContainer>

            {/* Flex Layout Examples */}
            <SectionContainer>
              <h2 className="text-3xl font-bold mb-8 text-center">Flex Layouts</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Horizontal Flex</h3>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-between items-center">
                    <CardContainer className="flex-1">
                      <h4 className="font-semibold mb-2">Left Content</h4>
                      <p className="text-sm text-muted-foreground">
                        This content is aligned to the left and takes available space.
                      </p>
                    </CardContainer>
                    <CardContainer className="flex-1">
                      <h4 className="font-semibold mb-2">Right Content</h4>
                      <p className="text-sm text-muted-foreground">
                        This content is aligned to the right and takes available space.
                      </p>
                    </CardContainer>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Vertical Flex</h3>
                  <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 items-center min-h-[200px]">
                    <CardContainer>
                      <h4 className="font-semibold mb-2">Top Item</h4>
                      <p className="text-sm text-muted-foreground">
                        Vertically centered content with proper spacing.
                      </p>
                    </CardContainer>
                    <CardContainer>
                      <h4 className="font-semibold mb-2">Bottom Item</h4>
                      <p className="text-sm text-muted-foreground">
                        Multiple items stacked vertically with consistent spacing.
                      </p>
                    </CardContainer>
                  </div>
                </div>
              </div>
            </SectionContainer>

            {/* Fixed Functional Navbar */}
            <SectionContainer>
              <h2 className="text-3xl font-bold mb-8 text-center">Fixed Functional Navbar</h2>
              
              <div className="space-y-8">
                {/* Fixed Features */}
                <CardContainer className="border-green-200 bg-green-50/50">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">✅ Fully Functional Navbar</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold">Working Hamburger Menu</h4>
                        <p className="text-sm text-muted-foreground">
                          Hamburger menu now works perfectly - clicks open/close the mobile menu.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold">Slides in from Side</h4>
                        <p className="text-sm text-muted-foreground">
                          Menu slides in smoothly from the right side with smooth animations.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold">Semi-Transparent Overlay</h4>
                        <p className="text-sm text-muted-foreground">
                          Dark semi-transparent overlay covers the background when menu is open.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold">Fully Visible & Scrollable</h4>
                        <p className="text-sm text-muted-foreground">
                          Menu is fully visible on mobile and tablet with scrollable content if needed.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold">Self-Contained</h4>
                        <p className="text-sm text-muted-foreground">
                          Navbar code is completely self-contained and doesn't affect other layouts.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContainer>

                {/* Design Comparison */}
                <CardContainer>
                  <h3 className="text-xl font-semibold mb-4">Design Comparison</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-red-600">❌ Before (Full-Screen)</h4>
                      <div className="bg-red-50 p-4 rounded border border-red-200">
                        <ul className="text-sm space-y-1">
                          <li>• Full-screen overlay</li>
                          <li>• Text collision issues</li>
                          <li>• Poor space utilization</li>
                          <li>• Overwhelming on mobile</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-green-600">✅ After (Semi-Transparent)</h4>
                      <div className="bg-green-50 p-4 rounded border border-green-200">
                        <ul className="text-sm space-y-1">
                          <li>• Compact semi-transparent menu</li>
                          <li>• No text collision</li>
                          <li>• Efficient space usage</li>
                          <li>• Better mobile experience</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContainer>

                {/* Technical Features */}
                <CardContainer>
                  <h3 className="text-xl font-semibold mb-4">Technical Features</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold">Responsive Positioning</h4>
                        <p className="text-sm text-muted-foreground">
                          Menu adapts to different screen sizes with max-width constraints and proper positioning.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold">Backdrop Blur</h4>
                        <p className="text-sm text-muted-foreground">
                          Subtle backdrop blur effect for modern glass-morphism appearance.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold">Smooth Animations</h4>
                        <p className="text-sm text-muted-foreground">
                          Smooth slide-in animation with opacity transitions for better user experience.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold">Accessibility</h4>
                        <p className="text-sm text-muted-foreground">
                          Proper ARIA labels, keyboard navigation, and screen reader support maintained.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContainer>
              </div>
            </SectionContainer>

            {/* Text Collision Solution Demo */}
            <SectionContainer>
              <h2 className="text-3xl font-bold mb-8 text-center">Text Collision Solution</h2>
              
              <div className="space-y-8">
                {/* Problem Demonstration */}
                <CardContainer className="border-red-200 bg-red-50/50">
                  <h3 className="text-xl font-semibold mb-4 text-red-800">❌ Before: Text Collision Issue</h3>
                  <div className="bg-white p-4 rounded border border-red-200">
                    <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                      Permíteme presentarme, soy Luis — un Desarrollador Web Frontend & Ingeniero de Optimización Impulsado por IA
                    </h4>
                    <p className="text-sm text-red-600">
                      This long text would overflow and collide on mobile devices without proper responsive handling.
                    </p>
                  </div>
                </CardContainer>

                {/* Solution Demonstration */}
                <CardContainer className="border-green-200 bg-green-50/50">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">✅ After: Responsive Solution</h3>
                  <div className="bg-white p-4 rounded border border-green-200">
                    <ResponsiveHeading
                      level={2}
                      size="4xl"
                      className="text-gray-800 mb-4 break-words hyphens-auto"
                    >
                      Permíteme presentarme, soy Luis — un Desarrollador Web Frontend & Ingeniero de Optimización Impulsado por IA
                    </ResponsiveHeading>
                    <p className="text-sm text-green-600">
                      The same text now scales properly across all devices with smart line breaks and responsive sizing.
                    </p>
                  </div>
                </CardContainer>

                {/* Responsive Text Sizes Demo */}
                <CardContainer>
                  <h3 className="text-xl font-semibold mb-4">Responsive Text Sizes</h3>
                  <div className="space-y-4">
                    <div>
                      <ResponsiveText size="xs" className="block mb-2">
                        Extra Small Text (xs) - Perfect for captions and fine print
                      </ResponsiveText>
                    </div>
                    <div>
                      <ResponsiveText size="sm" className="block mb-2">
                        Small Text (sm) - Great for secondary information
                      </ResponsiveText>
                    </div>
                    <div>
                      <ResponsiveText size="base" className="block mb-2">
                        Base Text (base) - Standard body text size
                      </ResponsiveText>
                    </div>
                    <div>
                      <ResponsiveText size="lg" className="block mb-2">
                        Large Text (lg) - Perfect for subheadings
                      </ResponsiveText>
                    </div>
                    <div>
                      <ResponsiveText size="xl" className="block mb-2">
                        Extra Large Text (xl) - Great for section headers
                      </ResponsiveText>
                    </div>
                    <div>
                      <ResponsiveText size="2xl" className="block mb-2">
                        Double Extra Large Text (2xl) - Page titles
                      </ResponsiveText>
                    </div>
                  </div>
                </CardContainer>

                {/* Breakpoint Visibility Demo */}
                <CardContainer>
                  <h3 className="text-xl font-semibold mb-4">Responsive Visibility</h3>
                  <div className="space-y-4">
                    <MobileOnly>
                      <div className="bg-blue-100 p-3 rounded text-blue-800">
                        📱 This content is only visible on mobile devices
                      </div>
                    </MobileOnly>
                    
                    <TabletOnly>
                      <div className="bg-green-100 p-3 rounded text-green-800">
                        📱💻 This content is only visible on tablet devices
                      </div>
                    </TabletOnly>
                    
                    <DesktopOnly>
                      <div className="bg-purple-100 p-3 rounded text-purple-800">
                        🖥️ This content is only visible on desktop devices
                      </div>
                    </DesktopOnly>
                    
                    <MobileAndTablet>
                      <div className="bg-orange-100 p-3 rounded text-orange-800">
                        📱💻 This content is visible on mobile and tablet (hidden on desktop)
                      </div>
                    </MobileAndTablet>
                    
                    <TabletAndDesktop>
                      <div className="bg-indigo-100 p-3 rounded text-indigo-800">
                        💻🖥️ This content is visible on tablet and desktop (hidden on mobile)
                      </div>
                    </TabletAndDesktop>
                  </div>
                </CardContainer>
              </div>
            </SectionContainer>

            {/* Responsive Layout Demo */}
            <SectionContainer>
              <h2 className="text-3xl font-bold mb-8 text-center">Responsive Layout System</h2>
              
              <div className="space-y-8">
                <CardContainer>
                  <h3 className="text-xl font-semibold mb-4">Layout Variants</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Hero Layout</h4>
                      <HeroLayout className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded border">
                        <p className="text-center text-sm">Perfect for hero sections with full viewport height</p>
                      </HeroLayout>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Content Layout</h4>
                      <ContentLayout className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded border">
                        <p className="text-center text-sm">Ideal for main content sections with proper spacing</p>
                      </ContentLayout>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Text Layout</h4>
                      <TextLayout className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded border">
                        <p className="text-center text-sm">Optimized for readable text content with prose styling</p>
                      </TextLayout>
                    </div>
                  </div>
                </CardContainer>
              </div>
            </SectionContainer>
          </div>
        </PageContainer>
      </main>
    </>
  )
}
